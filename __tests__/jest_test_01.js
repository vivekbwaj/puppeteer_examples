beforeAll(() => {
  console.log("before all..");
});

afterAll(() => {
  console.log("after all..");
});

beforeEach(() => {
  console.log("this is before each test..");
});

afterEach(() => {
  console.log("this is after each test..");
});

describe('My work', () => {
  test('works', () => {
    expect(2).toEqual(2)
    console.log("test #1 passed..");
  })

  test('works', () => {
    console.log("test #2 passed..");
  })

})

describe('Your work', () => {
  test('works', () => {
    console.log("your test #1 passed..");
  })

})

test.only('works', () => {
  console.log("Alienated test #1 passed..");
})