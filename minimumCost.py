# to make his gf happy Taum needs to buy `b` black gifts and `w` white gifts
# the cost of black gifts vs white gifts are `bc` and `wc` respectively 
# z is the cost to convert one gift to another is `z`
def taumBday(b, w, bc, wc, z):
    total = 0
    if bc + z >= wc and wc + z >= bc:
        total += (bc*b) + (wc*w)
    elif bc + z < wc:
        total +=(bc*b) + (bc*w) + (z*w)
    elif wc + z < bc:
        total += (wc*w) + (wc*b) + (z*b)
    return total

