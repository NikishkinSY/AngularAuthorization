using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Services
{
    public interface IHumanService
    {
        Task<ICollection<Human>> GetAsync();
    }
}
