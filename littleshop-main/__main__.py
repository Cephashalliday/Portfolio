from store import Store

print("""
Stock Management Software, Time To Make Some Orders
""")
print('*'*50)
store = Store()
print("Available item and their prices")
print('-'*30)

for product_name,product_price in store.inventory.items():
    print(f"{product_name} : GHS {product_price}")
print('-'*30)

def takeOrderData():
    while True:
        print("Enter 1 to add an item to your cart\nEnter 2 to place your order")
        u_choice = input("Enter 1 or 2: ")
        while u_choice != '1' and u_choice != '2':
            u_choice = input("Please enter 1 or 2: ")
        if u_choice == '1':
            item_name = input("Enter name of item you want to buy: ")
            item_qty = int(input(f"How many pieces of {item_name} do you want: "))
            if store.addItemToCart(item_name.lower(), item_qty):
                print("||Added item to cart||\n")
            else:
                print("||Item not added to cart, enter an available item||\n")
        else:
            store.generateReceipt()
            print("**Thanks for buying from us.**")
            return 0

takeOrderData()