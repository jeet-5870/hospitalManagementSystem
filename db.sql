-- Patients Table
CREATE TABLE Patients (
  patient_id INT PRIMARY KEY AUTO_INCREMENT,
  patient_name VARCHAR(100) NOT NULL,
  age INT CHECK (age >= 0),
  gender ENUM('Male', 'Female', 'Other') NOT NULL,
  contact VARCHAR(15) UNIQUE NOT NULL
);

-- Doctors Table
CREATE TABLE Doctors (
  doctor_id INT PRIMARY KEY AUTO_INCREMENT,
  doctor_name VARCHAR(100) NOT NULL,
  specialization VARCHAR(100),
  phone VARCHAR(15) UNIQUE NOT NULL
);

-- Departments Table
CREATE TABLE Departments (
  department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(100) NOT NULL,
  floor INT CHECK (floor >= 0)
);

-- Appointments Table
CREATE TABLE Appointments (
  appointment_id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT NOT NULL,
  doctor_id INT NOT NULL,
  appointment_date DATE NOT NULL,
  status ENUM('Confirmed', 'Pending', 'Cancelled') DEFAULT 'Pending',
  FOREIGN KEY (patient_id) REFERENCES Patients(patient_id) ON DELETE CASCADE,
  FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id) ON DELETE CASCADE
);
 