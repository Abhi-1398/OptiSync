using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace optisync1.Models;

public partial class Optisync2Context : DbContext
{
    public Optisync2Context()
    {
    }

    public Optisync2Context(DbContextOptions<Optisync2Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Assembly> Assemblies { get; set; }

    public virtual DbSet<Client> Clients { get; set; }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<Cpm> Cpms { get; set; }

    public virtual DbSet<Dispatch> Dispatches { get; set; }

    public virtual DbSet<DispatchStatus> DispatchStatuses { get; set; }

    public virtual DbSet<Forward> Forwards { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Machine> Machines { get; set; }

    public virtual DbSet<MasterVendor> MasterVendors { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<Part> Parts { get; set; }

    public virtual DbSet<Plan> Plans { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Production> Productions { get; set; }

    public virtual DbSet<RawMaterial> RawMaterials { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Stock> Stocks { get; set; }

    public virtual DbSet<Store> Stores { get; set; }

    public virtual DbSet<Vendormap> Vendormaps { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=optisync2", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Assembly>(entity =>
        {
            entity.HasKey(e => e.AssemblyEntryNo).HasName("PRIMARY");

            entity.ToTable("assembly");

            entity.HasIndex(e => e.OrderId, "a1_idx");

            entity.HasIndex(e => e.PartId, "a2_idx");

            entity.Property(e => e.AssemblyEntryNo).HasColumnName("assembly_entry_no");
            entity.Property(e => e.Achieve).HasColumnName("achieve");
            entity.Property(e => e.AssemblerName)
                .HasMaxLength(45)
                .HasColumnName("assembler_name");
            entity.Property(e => e.CurrentQty).HasColumnName("current_qty");
            entity.Property(e => e.Date)
                .HasDefaultValueSql("curdate()")
                .HasColumnName("date");
            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.PartId).HasColumnName("part_id");
            entity.Property(e => e.ReceivedPartQty).HasColumnName("received_part_qty");
            entity.Property(e => e.TargetedValue).HasColumnName("targeted_value");

            entity.HasOne(d => d.Order).WithMany(p => p.Assemblies)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("a1");

            entity.HasOne(d => d.Part).WithMany(p => p.Assemblies)
                .HasForeignKey(d => d.PartId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("a2");
        });

        modelBuilder.Entity<Client>(entity =>
        {
            entity.HasKey(e => e.ClientId).HasName("PRIMARY");

            entity.ToTable("client");

            entity.Property(e => e.ClientId).HasColumnName("client_id");
            entity.Property(e => e.ClientName)
                .HasMaxLength(255)
                .HasColumnName("client_name");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.CompanyId).HasName("PRIMARY");

            entity.ToTable("company");

            entity.HasIndex(e => e.PlanId, "c1_idx");

            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.AdminApproval)
                .HasDefaultValueSql("b'0'")
                .HasColumnType("bit(1)")
                .HasColumnName("admin_approval");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(255)
                .HasColumnName("company_name");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(255)
                .HasColumnName("contact_no");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.ModeOfTransaction)
                .HasMaxLength(255)
                .HasDefaultValueSql("'online'")
                .HasColumnName("mode_of_transaction");
            entity.Property(e => e.PaymentStatus)
                .HasDefaultValueSql("b'0'")
                .HasColumnType("bit(1)")
                .HasColumnName("payment_status");
            entity.Property(e => e.PersonName)
                .HasMaxLength(255)
                .HasColumnName("person_name");
            entity.Property(e => e.PlanEnddate)
                .HasMaxLength(6)
                .HasColumnName("plan_enddate");
            entity.Property(e => e.PlanId).HasColumnName("plan_id");
            entity.Property(e => e.PlanStartdate)
                .HasMaxLength(6)
                .HasColumnName("plan_startdate");
            entity.Property(e => e.RegistrationDate)
                .HasMaxLength(6)
                .HasDefaultValueSql("curdate()")
                .HasColumnName("registration_date");

            entity.HasOne(d => d.Plan).WithMany(p => p.Companies)
                .HasForeignKey(d => d.PlanId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("co1");
        });

        modelBuilder.Entity<Cpm>(entity =>
        {
            entity.HasKey(e => e.CpmId).HasName("PRIMARY");

            entity.ToTable("cpm");

            entity.HasIndex(e => e.ProductId, "c1_idx");

            entity.HasIndex(e => e.PartId, "c2_idx");

            entity.HasIndex(e => e.CompanyId, "c_idx");

            entity.Property(e => e.CpmId).HasColumnName("cpm_id");
            entity.Property(e => e.AssemblyCt).HasColumnName("assembly_ct");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.DispatchCt).HasColumnName("dispatch_ct");
            entity.Property(e => e.PartId).HasColumnName("part_id");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.ProductionCt).HasColumnName("production_ct");
            entity.Property(e => e.StoreCt).HasColumnName("store_ct");
            entity.Property(e => e.VendorCt).HasColumnName("vendor_ct");

            entity.HasOne(d => d.Company).WithMany(p => p.Cpms)
                .HasForeignKey(d => d.CompanyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("c");

            entity.HasOne(d => d.Part).WithMany(p => p.Cpms)
                .HasForeignKey(d => d.PartId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("c2");

            entity.HasOne(d => d.Product).WithMany(p => p.Cpms)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("c1");
        });

        modelBuilder.Entity<Dispatch>(entity =>
        {
            entity.HasKey(e => e.DispatchEntryNo).HasName("PRIMARY");

            entity.ToTable("dispatch");

            entity.HasIndex(e => e.ProductId, "d1_idx");

            entity.HasIndex(e => e.DispatchStatus, "d2_idx");

            entity.HasIndex(e => e.OrderId, "d_idx");

            entity.Property(e => e.DispatchEntryNo).HasColumnName("dispatch_entry_no");
            entity.Property(e => e.Achieved).HasColumnName("achieved");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.DispatchStatus).HasColumnName("dispatch_status");
            entity.Property(e => e.DispatcherName)
                .HasMaxLength(45)
                .HasColumnName("dispatcher_name");
            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.ReceivedProductQty).HasColumnName("received_product_qty");
            entity.Property(e => e.TagetedValue).HasColumnName("tageted_value");

            entity.HasOne(d => d.DispatchStatusNavigation).WithMany(p => p.Dispatches)
                .HasForeignKey(d => d.DispatchStatus)
                .HasConstraintName("d2");

            entity.HasOne(d => d.Order).WithMany(p => p.Dispatches)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("d");

            entity.HasOne(d => d.Product).WithMany(p => p.Dispatches)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("d1");
        });

        modelBuilder.Entity<DispatchStatus>(entity =>
        {
            entity.HasKey(e => e.DispatchStatusId).HasName("PRIMARY");

            entity.ToTable("dispatch_status");

            entity.Property(e => e.DispatchStatusId).HasColumnName("dispatch_status_id");
            entity.Property(e => e.StatusMeaning)
                .HasMaxLength(45)
                .HasColumnName("status_meaning");
        });

        modelBuilder.Entity<Forward>(entity =>
        {
            entity.HasKey(e => e.ForwardId).HasName("PRIMARY");

            entity.ToTable("forward");

            entity.Property(e => e.ForwardId).HasColumnName("forward_id");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.CompanyId, "l1_idx");

            entity.HasIndex(e => e.RoleId, "l2_idx");

            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.ForgetpassStatus)
                .HasDefaultValueSql("b'0'")
                .HasColumnType("bit(1)")
                .HasColumnName("forgetpass_status");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.SetupStatus)
                .HasDefaultValueSql("b'0'")
                .HasColumnType("bit(1)")
                .HasColumnName("setup_status");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");

            entity.HasOne(d => d.Company).WithMany(p => p.Logins)
                .HasForeignKey(d => d.CompanyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("l1");

            entity.HasOne(d => d.Role).WithMany(p => p.Logins)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("l2");
        });

        modelBuilder.Entity<Machine>(entity =>
        {
            entity.HasKey(e => e.MachineId).HasName("PRIMARY");

            entity.ToTable("machines");

            entity.HasIndex(e => e.CompanyId, "m1_idx");

            entity.Property(e => e.MachineId).HasColumnName("machine_id");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.MachineDescription)
                .HasMaxLength(255)
                .HasColumnName("machine_description");
            entity.Property(e => e.MachineName)
                .HasMaxLength(255)
                .HasColumnName("machine_name");

            entity.HasOne(d => d.Company).WithMany(p => p.Machines)
                .HasForeignKey(d => d.CompanyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("m1");
        });

        modelBuilder.Entity<MasterVendor>(entity =>
        {
            entity.HasKey(e => e.MasterVendorId).HasName("PRIMARY");

            entity.ToTable("master_vendor");

            entity.Property(e => e.MasterVendorId).HasColumnName("master_vendor_id");
            entity.Property(e => e.MasterVendorName)
                .HasMaxLength(255)
                .HasColumnName("master_vendor_name");
            entity.Property(e => e.MasterVendorPartName)
                .HasMaxLength(255)
                .HasColumnName("master_vendor_part_name");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.HasIndex(e => e.CompanyId, "o1_idx");

            entity.HasIndex(e => e.ClientId, "o2_idx");

            entity.HasIndex(e => e.ProductId, "o3_idx");

            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.ClientId).HasColumnName("client_id");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.DispatchQty).HasColumnName("dispatch_qty");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.ProductQty).HasColumnName("product_qty");
            entity.Property(e => e.StartDate).HasColumnName("start_date");

            entity.HasOne(d => d.Client).WithMany(p => p.Orders)
                .HasForeignKey(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("o2");

            entity.HasOne(d => d.Company).WithMany(p => p.Orders)
                .HasForeignKey(d => d.CompanyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("o1");

            entity.HasOne(d => d.Product).WithMany(p => p.Orders)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("o3");
        });

        modelBuilder.Entity<Part>(entity =>
        {
            entity.HasKey(e => e.PartId).HasName("PRIMARY");

            entity.ToTable("parts");

            entity.HasIndex(e => e.ProductId, "p1_idx");

            entity.Property(e => e.PartId).HasColumnName("part_id");
            entity.Property(e => e.PartDescription)
                .HasMaxLength(255)
                .HasColumnName("part_description");
            entity.Property(e => e.PartName)
                .HasMaxLength(255)
                .HasColumnName("part_name");
            entity.Property(e => e.ProductId).HasColumnName("product_id");

            entity.HasOne(d => d.Product).WithMany(p => p.Parts)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("p1");
        });

        modelBuilder.Entity<Plan>(entity =>
        {
            entity.HasKey(e => e.PlanId).HasName("PRIMARY");

            entity.ToTable("plans");

            entity.Property(e => e.PlanId).HasColumnName("plan_id");
            entity.Property(e => e.Duration).HasColumnName("duration");
            entity.Property(e => e.PlanName)
                .HasMaxLength(255)
                .HasColumnName("plan_name");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.UserNo).HasColumnName("user_no");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PRIMARY");

            entity.ToTable("product");

            entity.HasIndex(e => e.CompanyId, "pr1_idx");

            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.ProductDescription)
                .HasMaxLength(255)
                .HasColumnName("product_description");
            entity.Property(e => e.ProductName)
                .HasMaxLength(255)
                .HasColumnName("product_name");

            entity.HasOne(d => d.Company).WithMany(p => p.Products)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("pr1");
        });

        modelBuilder.Entity<Production>(entity =>
        {
            entity.HasKey(e => e.EntryNo).HasName("PRIMARY");

            entity.ToTable("production");

            entity.HasIndex(e => e.OrderId, "p1_idx");

            entity.HasIndex(e => e.RawMaterialId, "p2_idx");

            entity.HasIndex(e => e.MachineId, "p3_idx");

            entity.Property(e => e.EntryNo).HasColumnName("entry_no");
            entity.Property(e => e.Achieve).HasColumnName("achieve");
            entity.Property(e => e.CurrentQty).HasColumnName("current_qty");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.MachineId).HasColumnName("machine_id");
            entity.Property(e => e.OperatorName)
                .HasMaxLength(200)
                .HasColumnName("operator_name");
            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.RawMaterialId).HasColumnName("raw_material_id");
            entity.Property(e => e.ReceivedQty).HasColumnName("received_qty");
            entity.Property(e => e.TargetValue).HasColumnName("target_value");

            entity.HasOne(d => d.Machine).WithMany(p => p.Productions)
                .HasForeignKey(d => d.MachineId)
                .HasConstraintName("pd3");

            entity.HasOne(d => d.Order).WithMany(p => p.Productions)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("pd1");

            entity.HasOne(d => d.RawMaterial).WithMany(p => p.Productions)
                .HasForeignKey(d => d.RawMaterialId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("pd2");
        });

        modelBuilder.Entity<RawMaterial>(entity =>
        {
            entity.HasKey(e => e.RawMaterialId).HasName("PRIMARY");

            entity.ToTable("raw_materials");

            entity.HasIndex(e => e.PartId, "raw1_idx");

            entity.Property(e => e.RawMaterialId).HasColumnName("raw_material_id");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.PartId).HasColumnName("part_id");

            entity.HasOne(d => d.Part).WithMany(p => p.RawMaterials)
                .HasForeignKey(d => d.PartId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("raw1");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(255)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity.HasKey(e => e.StockEntryNo).HasName("PRIMARY");

            entity.ToTable("stock");

            entity.HasIndex(e => e.CompanyId, "s1_idx");

            entity.HasIndex(e => e.RawMaterialId, "s2_idx");

            entity.HasIndex(e => e.PartId, "s3_idx");

            entity.Property(e => e.StockEntryNo).HasColumnName("stock_entry_no");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.FinalPartQty).HasColumnName("final_part_qty");
            entity.Property(e => e.FinalRawMaterialQty).HasColumnName("final_raw_material_qty");
            entity.Property(e => e.PartId).HasColumnName("part_id");
            entity.Property(e => e.PartQty).HasColumnName("part_qty");
            entity.Property(e => e.RawMaterialId).HasColumnName("raw_material_id");
            entity.Property(e => e.RawMaterialQty).HasColumnName("raw_material_qty");
            entity.Property(e => e.StockDate)
                .HasMaxLength(6)
                .HasColumnName("stock_date");

            entity.HasOne(d => d.Company).WithMany(p => p.Stocks)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("s1");

            entity.HasOne(d => d.Part).WithMany(p => p.Stocks)
                .HasForeignKey(d => d.PartId)
                .HasConstraintName("s3");

            entity.HasOne(d => d.RawMaterial).WithMany(p => p.Stocks)
                .HasForeignKey(d => d.RawMaterialId)
                .HasConstraintName("s2");
        });

        modelBuilder.Entity<Store>(entity =>
        {
            entity.HasKey(e => e.StoreEntryNo).HasName("PRIMARY");

            entity.ToTable("stores");

            entity.HasIndex(e => e.RawMaterialId, "st1_idx");

            entity.HasIndex(e => e.PartId, "st2_idx");

            entity.HasIndex(e => e.ForwardId, "st3_idx");

            entity.HasIndex(e => e.OrderId, "st_idx");

            entity.Property(e => e.StoreEntryNo).HasColumnName("store_entry_no");
            entity.Property(e => e.ForwardId).HasColumnName("forward_id");
            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.PartId).HasColumnName("part_id");
            entity.Property(e => e.PartQty).HasColumnName("part_qty");
            entity.Property(e => e.RawMaterialId).HasColumnName("raw_material_id");
            entity.Property(e => e.RawMaterialQty).HasColumnName("raw_material_qty");
            entity.Property(e => e.StoreDate).HasColumnName("store_date");

            entity.HasOne(d => d.Forward).WithMany(p => p.Stores)
                .HasForeignKey(d => d.ForwardId)
                .HasConstraintName("st3");

            entity.HasOne(d => d.Order).WithMany(p => p.Stores)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("st");

            entity.HasOne(d => d.Part).WithMany(p => p.Stores)
                .HasForeignKey(d => d.PartId)
                .HasConstraintName("st2");

            entity.HasOne(d => d.RawMaterial).WithMany(p => p.Stores)
                .HasForeignKey(d => d.RawMaterialId)
                .HasConstraintName("st1");
        });

        modelBuilder.Entity<Vendormap>(entity =>
        {
            entity.HasKey(e => e.VendormapId).HasName("PRIMARY");

            entity.ToTable("vendormap");

            entity.HasIndex(e => e.VendorId, "v1");

            entity.HasIndex(e => e.CompanyId, "v2_idx");

            entity.Property(e => e.VendormapId).HasColumnName("vendormap_id");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.PartId).HasColumnName("part_id");
            entity.Property(e => e.VendorId).HasColumnName("vendor_id");

            entity.HasOne(d => d.Company).WithMany(p => p.Vendormaps)
                .HasForeignKey(d => d.CompanyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("v2");

            entity.HasOne(d => d.Vendor).WithMany(p => p.Vendormaps)
                .HasForeignKey(d => d.VendorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("v1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
