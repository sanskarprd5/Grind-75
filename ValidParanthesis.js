var isValid = function(s) {
    const hashMap = { "(":")" , "{":"}" , "[":"]"};
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if(hashMap[s[i]]) {
            stack.push(hashMap[s[i]]);
        }
        else if( stack.length > 0 && stack[stack.length - 1] === s[i]){
            stack.pop();
        }
        else {
            return false;
        }
    }
    return stack.length === 0;
};
