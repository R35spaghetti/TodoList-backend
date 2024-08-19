using System.ComponentModel.DataAnnotations;

namespace TodoList_backend.Models;

public class Todo
{
    [Key]
    public int Id { get;  set; }
    [Required]
    public DateTime Date { get; set; }
    [Required]
    [MaxLength(20)]
    public string Author { get; set; }
    [Required]
    [MaxLength(30)]
    public string Name { get; set; }
    [Required]
    [MaxLength(100)]
    public string Description { get; set; }
    [Required]
    public bool IsCompleted { get; set; }
}