class Node: 
    def __init__(self, next=None, prev=None, data=None): 
        self.next = next # reference to next node in DLL 
        self.prev = prev # reference to previous node in DLL 
        self.data = data 
class LinkedList:
    def __init__(self):
        self.head = None
        
    def add(self, new_data):
        new_node = Node(data = new_data)
        new_node.next = None
        new_node.prev


    def push(self, new_data):
        new_node = Node(data = new_data)
        new_node.next = self.head
        new_node.prev = None

        if self.head is not None:
            self.head.prev = new_node
        
        self.head = new_node
    
    def printList(self):
        temp = self.head
        while (temp):
            print(temp.data),
            temp = temp.next

llist = LinkedList()
llist.head = Node(data = 1)
second = Node(data = 2)
third = Node(data = 3)


llist.head.next = second
second.next = third


llist.push(7)
llist.printList()