import { connection, isEven } from "../src"

describe("isEven", () => {
   test("Should return `true` when input is an even number", () => {
      const result = isEven(2)

      expect(result).toBe(true)
      expect(isEven(-2)).toBe(true)
      expect(isEven(0)).toBe(true)
   })

   test("Should return `false` when input is an odd number", () => {
      expect(isEven(-3)).toEqual(false)
      expect(isEven(3)).toEqual(false)
   })

   test("Should return false when input is not integer", () => {
      expect(isEven(0.5)).toBe(false)
   })
})

describe("Random tests", () => {
   test("learning some assertions", () => {
      expect(0).toBe(0)
      expect(0).toEqual(0)
      // expect([]).toBe([]) // falha
      expect([]).toEqual([]) // passa

      expect(10).toBeGreaterThan(7)
      expect(10).toBeLessThanOrEqual(27)
      // expect(new Date("2020-02-09")).toBeGreaterThan((new Date("2020-02-08")) // falha

      expect("Hello").toContain("l")
      expect(["hello", "world"]).toContain("hello")
      // expect([["hello"], ["world"]]).toContain(["hello"]) // falha
      expect([["hello"], ["world"]]).toContainEqual(["hello"]) // passa 

      expect(0).not.toEqual(1)
   })


})

describe("async & error handling", () => {
   
   test("Should connect to MySql", async () => {
      expect.assertions(1)
      
      try {
         const result: any = await connection.raw(
            "SHOW TABLES"
         )

         // console.table(result[0])

         expect(result[0][0]).toBeDefined()
      } catch (error) {
         console.log(error.message);
      }
   })

   test("Should throw an error", async()=>{
     expect.assertions(1)

      try {
         // consulta uma tabela que não existe
         const result = await connection("bananinha")
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
      }
      
   })

   afterAll(async () => {
      await connection.destroy()
   })
})