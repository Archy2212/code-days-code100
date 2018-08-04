echo enter a no
read a
x=0
y=1
i=2
echo series is
if [ $a -eq 0 ]
then
echo not allowed

elif [ $a -eq 1 ]
then
echo $x
elif [ $a -eq 2 ]
then
echo $x 
echo $y
else
echo $x
echo $y
while [ $i -lt $a ]
do
z=`expr $x + $y`
x=$y
y=$z

echo $z
i=`expr $i + 1`
done
fi
