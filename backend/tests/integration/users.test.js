const supertest=require('supertest')
const app=require('../../index')
const User=require('../../models/User')

describe('User API - Integration',()=>{
    it('should create a new user',async()=>{
        const res=await supertest(app)
        .post('/api/users')
        .send({ name: 'Alice', email: 'alice@example.com' })

        expect(res.status).toBe(200);
        expect(res.body.name).toBe('Alice')

        const userInDb=await User.findOne({email:'alice@example.com'});
        expect(userInDb).toBeTruthy();
    });

    it('should get all users',async()=>{
        await User.create({name:'Bob',email:'Bob@gmail.com'})

        const res=await supertest(app).get('/api/users')
        expect(res.status).toBe(200);
    })
})