let trap = function (height) {
  let water = 0; // Total accumulated water, our output
  let stack = [];
  // This stack will contain each index where the height value is higher than all spaces to its right (so far)
  // These represent a series of "left walls" from highest to lowest that will retain water

  // Iterate from left to right
  for (let i = 0; i < height.length; i++) {
    // If the space to the left is lower than this space, accumulate water on top of it
    while (stack.length != 0 && height[i] > height[stack[stack.length - 1]]) {
      // pop off the space and use it as the floor level we accumulate water from
      let floor = stack.pop();
      // if floor was the only item on stack, there's no left wall to hold water so we skip water calculation with break.
      if (stack.length == 0) break;
      // Calculate the number of spaces we need to fill between the closest left wall and this wall
      let distance = i - stack[stack.length - 1] - 1;
      // Calculate how much water fits at one space held up by the floor and up to the lower of the 2 walls
      let depth = Math.min(height[stack[stack.length - 1]], height[i]) - height[floor];
      // Calculate the total water in the range between the left wall and here and add to water
      water += depth * distance;
      // Since we added water for all spaces at or below the lowest left wall, we now have a
      // nice level pool to become our new floor. Now we loop and make the last left wall height the
      // new floor and calculate what sits on top of our pool up to the next lowest left wall, and
      // continue until the left wall either doesn't exist (break on line 18) or is higher than our right wall.
    }
    // Set current index as rightmost lowest left wall
    stack.push(i);
  }

  return water;
};

console.log(trap([010210132121]));
