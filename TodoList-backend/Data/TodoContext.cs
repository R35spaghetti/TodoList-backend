using Microsoft.EntityFrameworkCore;
using TodoList_backend.Models;

namespace TodoList_backend.Data;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options) : base(options)
    {
        
    }
    
    
    public DbSet<Todo> Todo { get; set; } = default!;
}