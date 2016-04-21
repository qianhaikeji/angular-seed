(function() {
    'use strict';

    angular
        .module('app')
        .filter('range', range)
        .filter('timeAgo', timeAgo)
        .filter('megaNum', megaNum);

    function range() {
        return function(input, min, max) {
            min = parseInt(min);
            max = parseInt(max);

            for (var i=min; i<=max; i++) {
              input.push(i);
            }

            return input;
        };
    }

    function timeAgo($filter) {
        return function(time) {
            var msOfDay = 24 * 3600 * 1000;
            var msOfHour = 3600 * 1000;
            var msOfMinute = 60 * 1000;

            if (!time) {
                return "未知时间";
            }

            //求时间差：
            time = new Date(time);  //开始时间
            
            if (time.toJSON() == null) {
                return "未知时间";
            }

            var now = new Date();    //结束时间
            var diff = now.getTime() - time.getTime()  //时间差的毫秒数
            if (diff < 0) {
                return "1分钟前";
            }

            //计算出相差天数
            var days = Math.floor(diff / msOfDay)
            if (days >= 7) {
                return $filter('date')(time, 'yyyy-MM-dd');
            } else if (diff / msOfDay >= 1) {
                return days + "天前";
            } else if (diff / msOfHour >= 1){
                var hours = Math.floor(diff / msOfHour);
                return hours + "小时前";
            } else {
                var minute = Math.floor(diff / (60 * 1000));
                return minute + "分钟前";
            }
        };
    }

    function megaNum() {
        return function(input, precision) {
            if (input === 0) { return '0' }
            if (isNaN(parseFloat(input)) || !isFinite(input)) return '-';
            if (typeof precision === 'undefined') precision = 1;

            return  formatNum(input, precision);
        }
    }

    function formatNum(input, precision) {
        if (input == 0){
            return input;
        }
        
        var units = ['', 'k', 'M', 'B'],
                number = Math.floor(Math.log(input) / Math.log(1000)),
                val = (input / Math.pow(1000, Math.floor(number))).toFixed(precision);
        return  (val.match(/\.0*$/) ? val.substr(0, val.indexOf('.')) : val) + units[number]; 
    }
}());
