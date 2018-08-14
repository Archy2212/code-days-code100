num1=int(input("Enter first number"))
num2 =int(input("Enter second number"))
while True:
    print("Options:")
    print("Enter 'add' for adding")
    print("Enter 'sub' for subtracting")
    print("Enter 'mul' for multiplying")
    print("Enter 'div' for division")
    print("Enter 'quit' for end the program")
    user_input=input(":")
    if(user_input=='add'):
        result=str(num1+num2)
    elif user_input=='sub':
        if(num1>num2):
            result=str(num1-num2)
        else:
            result=str(num2-num1)
    elif user_input=='mul':
        result=str(num1*num2)
    elif user_input=='div':
        result=str(num1/num2)
    elif user_input=='quit':
        break
    else:
        print("unknown input")
    print("The answer is " +result)
        
    
