#!/bin/bash
PID=$(ps -eaf | grep electron | awk '{print $2}')
if [ "$PID" != "" ]; then
    killall -9 electron
fi
npm start
