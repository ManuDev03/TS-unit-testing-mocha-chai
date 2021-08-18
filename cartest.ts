import { Car } from './car'
import { expect } from 'chai'

describe("testing the class car",()=>{
    it("testing function get model",()=>{
        let obj = new Car("Honda civic")
        expect(obj.getModel()).to.equal("Honda civic")
    })
})