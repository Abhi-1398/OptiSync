using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string? RoleName { get; set; }

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
