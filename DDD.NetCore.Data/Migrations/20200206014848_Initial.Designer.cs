﻿// <auto-generated />
using DDD.NetCore.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DDD.NetCore.Data.Migrations
{
    [DbContext(typeof(ProjectContext))]
    [Migration("20200206014848_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DDD.NetCore.Domain.Entities.CervejaEntity", b =>
                {
                    b.Property<int>("PkId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("PK_ID")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DsNome")
                        .IsRequired()
                        .HasColumnName("DS_NOME")
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.Property<float>("VlPreco")
                        .HasColumnName("VL_PRECO")
                        .HasColumnType("real");

                    b.Property<float>("VlTeorAlcoolico")
                        .HasColumnName("VL_TEORALCOOLICO")
                        .HasColumnType("real");

                    b.HasKey("PkId");

                    b.ToTable("TB_CERVEJA");
                });

            modelBuilder.Entity("DDD.NetCore.Domain.Entities.RevendedorEntity", b =>
                {
                    b.Property<int>("PkId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("PK_ID")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DsNome")
                        .IsRequired()
                        .HasColumnName("DS_NOME")
                        .HasColumnType("nvarchar(70)")
                        .HasMaxLength(70);

                    b.HasKey("PkId");

                    b.ToTable("TB_REVENDEDOR");
                });
#pragma warning restore 612, 618
        }
    }
}
