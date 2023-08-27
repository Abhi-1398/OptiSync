using System;
using System.Collections.Generic;

namespace Optisync.Models;

public partial class Login
{
    public int LoginId { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }

    public int CompanyId { get; set; }

    public int RoleId { get; set; }

    public ulong? ForgetpassStatus { get; set; }

    public ulong? SetupStatus { get; set; }

    public virtual Company Company { get; set; } = null!;

    public virtual Role Role { get; set; } = null!;
}
