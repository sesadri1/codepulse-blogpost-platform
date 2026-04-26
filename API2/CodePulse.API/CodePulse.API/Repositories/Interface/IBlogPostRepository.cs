using CodePulse.API.Models.Domain;

namespace CodePulse.API.Repositories.Interface
{
    public interface IBlogPostRepository
    {
        Task<BlogPost> CreateAsync(BlogPost blogPost);//Post a Blog

        Task<IEnumerable<BlogPost>> GetAllAsync(); //Get All BlogPosts

        Task<BlogPost?> GetByIdAsync(Guid id);

        Task<BlogPost?> UpdateAsync(BlogPost blogPost);

        Task<BlogPost?> DeleteAsync(Guid id);
    }
}
