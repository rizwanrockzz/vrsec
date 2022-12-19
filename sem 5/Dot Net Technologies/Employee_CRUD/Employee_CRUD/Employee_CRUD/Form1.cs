﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace Employee_CRUD
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //Insert Button
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\SHREEE\\OneDrive\\Documents\\MyDataBase.mdf;Integrated Security=True;Connect Timeout=30");
            con.Open();

            SqlCommand cmd = new SqlCommand("insert into EmployeeData values(@Emp_ID,@Emp_Name,@Age,@Gender,@Designation,@Dept_ID,@Dept_Name,@Location,@Work_Project,@Company,@Salary)",con);
            cmd.Parameters.AddWithValue("@Emp_ID", int.Parse(textBox1.Text));
            cmd.Parameters.AddWithValue("@Emp_Name", textBox2.Text);
            cmd.Parameters.AddWithValue("@Age", int.Parse(textBox3.Text));
            cmd.Parameters.AddWithValue("@Gender", textBox4.Text);
            cmd.Parameters.AddWithValue("@Designation", textBox5.Text);
            cmd.Parameters.AddWithValue("@Dept_ID", int.Parse(textBox6.Text));
            cmd.Parameters.AddWithValue("@Dept_Name", textBox7.Text);
            cmd.Parameters.AddWithValue("@Location", textBox8.Text);
            cmd.Parameters.AddWithValue("@Work_Project", textBox9.Text);
            cmd.Parameters.AddWithValue("@Company", textBox10.Text);
            cmd.Parameters.AddWithValue("@Salary", double.Parse(textBox11.Text));

            cmd.ExecuteNonQuery();
            con.Close();
            MessageBox.Show(" Sucessfully Inserted the Data into Table.. ");
        }

        private void button4_Click(object sender, EventArgs e)
        {
            // Update Button
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\SHREEE\\OneDrive\\Documents\\MyDataBase.mdf;Integrated Security=True;Connect Timeout=30");
            con.Open();
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "Update EmployeeData set Emp_Name='" + textBox2.Text + "', Age='" + textBox3.Text + "', Gender='" + textBox4.Text + "', Designation='" + textBox5.Text + "', Dept_ID='" + textBox6.Text + "', Dept_Name='" + textBox7.Text + "', Location='" + textBox8.Text + "', Work_Project='" + textBox9.Text + "', Company='" + textBox10.Text + "', Salary='" + textBox11.Text + "' where Emp_ID='" + textBox1.Text + "'";

            cmd.ExecuteNonQuery();
            con.Close();
            MessageBox.Show(" Sucessfully Updated the Data into Table");

        }

        private void button2_Click(object sender, EventArgs e)
        {
            // Delete Button
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\SHREEE\\OneDrive\\Documents\\MyDataBase.mdf;Integrated Security=True;Connect Timeout=30");
            con.Open();

            SqlCommand cmd = new SqlCommand("Delete EmployeeData where Emp_ID = @Emp_ID", con);
            cmd.Parameters.AddWithValue("@Emp_ID", int.Parse(textBox1.Text));

            cmd.ExecuteNonQuery();
            con.Close();
            MessageBox.Show(" Sucessfully Deleted the Data into Table.. ");
        }

        private void button3_Click(object sender, EventArgs e)
        {
            // Display Button
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\SHREEE\\OneDrive\\Documents\\MyDataBase.mdf;Integrated Security=True;Connect Timeout=30");
            con.Open();

            SqlCommand cmd = new SqlCommand("Select * from EmployeeData",con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);

            dataGridView1.DataSource = dt;

        }

        private void button5_Click(object sender, EventArgs e)
        {
            // Exit Button
            this.Close();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            // Search Button
            SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\SHREEE\\OneDrive\\Documents\\MyDataBase.mdf;Integrated Security=True;Connect Timeout=30");
            con.Open();

            SqlCommand cmd = new SqlCommand("Select * from EmployeeData where Emp_ID=@Emp_ID", con);
            cmd.Parameters.AddWithValue("Emp_ID", int.Parse(textBox1.Text));
            
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);

            dataGridView1.DataSource = dt;


        }
    }
}
