import requests
import json

# Shopify Storefront credentials
SHOP_URL = "hvb9gt-qv.myshopify.com"
ACCESS_TOKEN = "897d2510d19bd01af34eda4f2ea9523b"
GRAPHQL_ENDPOINT = f"https://{SHOP_URL}/api/2023-04/graphql.json"

HEADERS = {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN,
}

QUERY = """
{
  products(first: 50) {
    edges {
      node {
        id
        title
        handle
        description
        tags
        variants(first: 10) {
          edges {
            node {
              id
              title
              sku
              price {
                amount
              }
            }
          }
        }
      }
    }
  }
}
"""

def fetch_shopify_products():
    response = requests.post(GRAPHQL_ENDPOINT, headers=HEADERS, json={"query": QUERY})
    if response.status_code != 200:
        raise Exception(f"Request failed: {response.status_code} - {response.text}")

    raw_data = response.json()
    products = []

    for edge in raw_data["data"]["products"]["edges"]:
        node = edge["node"]
        product = {
            "id": node["id"],
            "title": node["title"],
            "handle": node["handle"],
            "description": node["description"],
            "tags": node["tags"],
            "variants": []
        }
        for v_edge in node["variants"]["edges"]:
            variant = v_edge["node"]
            product["variants"].append({
                "id": variant["id"],
                "title": variant["title"],
                "sku": variant["sku"],
                "price": variant["price"]["amount"]
            })
        products.append(product)

    with open("shopify_products.json", "w") as f:
        json.dump(products, f, indent=2)
    print("✅ Products saved to shopify_products.json")

if __name__ == "__main__":
    fetch_shopify_products()
