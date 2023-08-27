using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Company
{
    public int CompanyId { get; set; }

    public string CompanyName { get; set; } = null!;

    public string PersonName { get; set; } = null!;

    public string ContactNo { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime? RegistrationDate { get; set; }

    public int PlanId { get; set; }

    public ulong? PaymentStatus { get; set; }

    public DateTime? PlanStartdate { get; set; }

    public DateTime? PlanEnddate { get; set; }

    public ulong AdminApproval { get; set; }

    public string? ModeOfTransaction { get; set; }

    public virtual ICollection<Cpm> Cpms { get; set; } = new List<Cpm>();

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();

    public virtual ICollection<Machine> Machines { get; set; } = new List<Machine>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual Plan Plan { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    public virtual ICollection<Stock> Stocks { get; set; } = new List<Stock>();

    public virtual ICollection<Vendormap> Vendormaps { get; set; } = new List<Vendormap>();
}
