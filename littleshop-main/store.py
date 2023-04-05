class Store:

    def __init__(self):
        print('items and their prices')
        print('_'*30)
        # Items and their prices
        self.inventory = {"Rice": 300,"Book": 50,"Oil": 250,"Sugar": 85,"Pen": 5,"Bread": 7}
        self.cart = []
        self.total_amount = 0

    def addItemToCart(self,item_name:str,item_quantity):
        if item_name.lower() not in self.inventory.keys():
            return False
        else:
            item = {"name":item_name,"price":"GHS"+str(self.inventory[item_name]),"qty":str(item_quantity)+" pieces","cost":"GHS"+str(self.inventory[item_name]*item_quantity)}
            self.cart.append(item)
            self.total_amount += self.inventory[item_name]*item_quantity
            return True
            
    def generateReceipt(self):
        receipt = open("receipt.txt","a")
        for cart_item in self.cart:
            item_data = ''
            for j in cart_item.values():
                item_data += str(j)+' '
            receipt.write(item_data+'\n')
        receipt.write(f"Total cost: GHS {self.total_amount}")
        receipt.close()
