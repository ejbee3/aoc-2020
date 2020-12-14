export default function partOne(array: string[]) {

  class BagNode<T> {

    public next: BagNode<T> | null = null;
    public prev: BagNode<T> | null = null;
    constructor(public bagName: T) {}
  }
  

  const testArr = ["light red bags contain 1 bright white bag, 2 muted yellow bags.",
  "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
  "bright white bags contain 1 shiny gold bag.",
  "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags."]

  let bagArr = []

  for (let i : number = 0; i < testArr.length; i++) {
    // bagArr.push(testArr[i].match(/(shiny gold bag)/))
    const [outerBag, innerBag] = testArr[i].split(/ contain /)
    bagArr.push(outerBag, innerBag)
  }
  return bagArr
}



// A bright white bag, which can hold your shiny gold bag directly.
// A muted yellow bag, which can hold your shiny gold bag directly, plus some other bags.
// A dark orange bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
// A light red bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.


// shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
// dark olive bags contain 3 faded blue bags, 4 dotted black bags.
// vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
// faded blue bags contain no other bags.
// dotted black bags contain no other bags.