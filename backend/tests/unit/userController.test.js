const {getUsers,createUser}=require('../../controller/userController')
const User=require('../../models/User')

jest.mock('../../models/User');   //This makes Jest replace the real Mongoose User model with a fake one.

describe('User Controller-Unit',()=>{   //Grouping all tests under one suite.
    it('Should get all users',async()=>{
        User.find.mockResolvedValue([{name:'John',email:'john@example.com'}])

        const req={}
        const res={
            json:jest.fn(),
            status:jest.fn().mockReturnThis()
        }

        await getUsers(req,res);
        expect(res.json).toHaveBeenCalledWith([{name: 'John', email: 'john@example.com'}])
    });

    it('Should Create a user',async()=>{
        const req={
            body:{name:'Khushi',email:'khushi@Gmail.com'}
        }

        const res={
            json:jest.fn(),
            status:jest.fn().mockReturnThis()
        }

        const savedUser={
            _id:'123',
            name: 'Khushi',
            email: 'khushi@Gmail.com'
        }

        User.mockImplementation(()=>({
            save:jest.fn().mockResolvedValue(savedUser)
        }))

        await createUser(req,res)

        expect(User).toHaveBeenCalledWith({
            name:'Khushi',
            email:'khushi@Gmail.com'
        })

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(savedUser)
    })
})