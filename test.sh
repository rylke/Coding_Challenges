 #!/bin/sh
 w=`who | cat $1`
 if [ -z "$w" ]; then
    echo "no loged in user";
 elif [ -n "$w" ]; then
    echo "user loged in: \n$w";
 fi