echo "Enter number"
read number
rev=0
while [ $number -gt 0 ]
	do
	  b=`expr $number % 10`
	  number=`expr $number / 10`
	  rev=`expr $rev \* 10 + $b`
	done
echo "reverse no is "$rev

