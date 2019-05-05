# x should be an array of vectors
# y should be an array of scalers
# a should be a scaler
def axpy(x,y,a):
    z = []
    for counter, i in enumerate(x):
        z.append((i*a) + y[counter])
    return z


print(axpy([0,0,1],[-3,2,0],4))
    
    
def axpy2(x,y,a,b):
    z = []
    for counter, i in enumerate(x):
        x[counter] = i*a
        y[counter] = y[counter]*b
        z.append(x[counter] + y[counter])
    return z
# print(axpy2([1,0,0],[0,1,0],-3,2))
