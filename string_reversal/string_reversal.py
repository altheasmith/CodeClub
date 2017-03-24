# python 1

lambda x: ''.join([x[-i-1] for i in range(len(x))])


def reverse(string):
	return ''.join([string[-i-1] for i in range(len(string))])


def reverse(string):
	l = list(string)
	l.reverse()
	return ''.join(l)




lambda x: x[::-1]