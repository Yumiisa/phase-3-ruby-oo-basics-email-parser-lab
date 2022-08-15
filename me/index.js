function solution(A) {
            var maxElement = 100001;
            arr.forEach(element => {
                let ele = element % 4;
                if (e === 0 && ele > maxElement) {
                    maxElement = element;                   
                }
            });
            console.log(maxElement);
            return maxElement;
        }