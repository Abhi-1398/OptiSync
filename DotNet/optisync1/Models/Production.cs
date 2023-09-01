using System;
using System.Collections.Generic;

namespace optisync1.Models;

public partial class Production
{
    public int EntryNo { get; set; }

    public int OrderId { get; set; }

    public int RawMaterialId { get; set; }

    public int? ReceivedQty { get; set; }

    public DateOnly? Date { get; set; }

    public int? TargetValue { get; set; }

    public int? Achieve { get; set; }

    public int? CurrentQty { get; set; }

    public string? OperatorName { get; set; }

    public int? MachineId { get; set; }

    public virtual Machine? Machine { get; set; }

    public virtual Order Order { get; set; } = null!;

    public virtual RawMaterial RawMaterial { get; set; } = null!;
}
