let trap = function (height) {
  let water = 0;
  let stack = [];
  for (let i = 0; i < height.length; i++) {
    while (stack.length != 0 && height[i] > height[stack[stack.length - 1]]) {
      let floor = stack.pop();
      if (stack.length == 0) break;
      let distance = i - stack[stack.length - 1] - 1;
      let depth = Math.min(height[stack[stack.length - 1]], height[i]) - height[floor];
      water += depth * distance;
    }
    stack.push(i);
  }
  return water;
};

console.log(trap([010210132121]));
