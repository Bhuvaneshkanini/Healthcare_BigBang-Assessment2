using BigBang_Assessment2_Healthcare_.Models;

namespace BigBang_Assessment2_Healthcare_.Repository
{
    public interface IUserRepo
    {
        Task<List<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> CreateUserAsync(User user);
        Task<bool> UpdateUserAsync(User user);
        Task<bool> DeleteUserAsync(int id);
    }
}
