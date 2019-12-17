##PYTHON BASICS

a=[0,1,2,3,5]

print (a[3])

##(adding only one data)

a=[0,1,2,3,5]

a.append(21)

print (a)

##(adding more than one data)

a=[0,1,2,3,5]

z=[40,50]

a.extend(z)

print(a)

##inserting the data where we want to place


a=[0,1,2,3,5]

a.insert(1,55)

print(a)

##delete the last value added


a=[0,1,2,3,5]

a.pop()

print(a)

##delete the particular number


a=[0,1,2,3,5]

a.remove (3)

print(a)