/**
 * UNIT TESTS
 */
jest.mock('../../models/User');  // mock ONLY for unit tests

const { getUsers, createUser } = require('../../controller/userController');
const User = require('../../models/User');

describe('User Controller - Unit', () => {
  
    afterEach(() => {
        jest.clearAllMocks(); // Prevent mocking leak
    });

    it('Should get all users', async () => {
        User.find.mockResolvedValue([{ name: 'John', email: 'john@example.com' }]);

        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        await getUsers(req, res);

        expect(res.json).toHaveBeenCalledWith([
            { name: 'John', email: 'john@example.com' }
        ]);
    });

    it('Should create a user', async () => {
        const req = {
            body: { name: 'Khushi', email: 'khushi@gmail.com' }
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        const savedUser = {
            _id: '123',
            name: 'Khushi',
            email: 'khushi@gmail.com'
        };

        User.mockImplementation(() => ({
            save: jest.fn().mockResolvedValue(savedUser)
        }));

        await createUser(req, res);

        expect(User).toHaveBeenCalledWith({
            name: 'Khushi',
            email: 'khushi@gmail.com'
        });

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(savedUser);
    });
});
