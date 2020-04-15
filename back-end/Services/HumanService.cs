using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Helpers;

namespace WebApi.Services
{
    public class HumanService: IHumanService
    {
        private readonly DataContext _context;

        public HumanService(
            DataContext context)
        {
            _context = context;
        }

        public async Task<ICollection<Human>> GetAsync()
        {
            return await _context.Humans.ToListAsync();
        }
    }
}
