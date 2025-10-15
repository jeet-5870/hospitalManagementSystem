const express = require('express');
const router = express.Router();
const db = require('../db');

//
// PATIENT ROUTES
//

// Add Patient
router.post('/patients', (req, res) => {
  const { patient_name, age, gender, contact } = req.body;
  db.query(
    'INSERT INTO Patients (patient_name, age, gender, contact) VALUES (?, ?, ?, ?)',
    [patient_name, age, gender, contact],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Patient added', id: result.insertId });
    }
  );
});

// Get Patients
router.get('/patients', (req, res) => {
  db.query('SELECT * FROM Patients', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Update Patient
router.put('/patients/:id', (req, res) => {
  const id = req.params.id;
  const { patient_name, age, gender, contact } = req.body;
  db.query(
    'UPDATE Patients SET patient_name = ?, age = ?, gender = ?, contact = ? WHERE patient_id = ?',
    [patient_name, age, gender, contact, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Patient updated' });
    }
  );
});

// Delete Patient
router.delete('/patients/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Patients WHERE patient_id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Patient deleted' });
  });
});


//
// DOCTOR ROUTES
//

// Add Doctor
router.post('/doctors', (req, res) => {
  const { doctor_name, specialization, phone } = req.body;
  db.query(
    'INSERT INTO Doctors (doctor_name, specialization, phone) VALUES (?, ?, ?)',
    [doctor_name, specialization, phone],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Doctor added', id: result.insertId });
    }
  );
});

// Get Doctors
router.get('/doctors', (req, res) => {
  db.query('SELECT * FROM Doctors', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Update Doctor
router.put('/doctors/:id', (req, res) => {
  const id = req.params.id;
  const { doctor_name, specialization, phone } = req.body;
  db.query(
    'UPDATE Doctors SET doctor_name = ?, specialization = ?, phone = ? WHERE doctor_id = ?',
    [doctor_name, specialization, phone, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Doctor updated' });
    }
  );
});

// Delete Doctor
router.delete('/doctors/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Doctors WHERE doctor_id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Doctor deleted' });
  });
});


//
// APPOINTMENT ROUTES
//

// Book Appointment
router.post('/appointments', (req, res) => {
  const { patient_id, doctor_id, appointment_date, status } = req.body;
  db.query(
    'INSERT INTO Appointments (patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, ?)',
    [patient_id, doctor_id, appointment_date, status],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Appointment booked', id: result.insertId });
    }
  );
});

// Get Appointments
router.get('/appointments', (req, res) => {
  db.query('SELECT * FROM Appointments', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Update Appointment
router.put('/appointments/:id', (req, res) => {
  const id = req.params.id;
  const { patient_id, doctor_id, appointment_date, status } = req.body;
  db.query(
    'UPDATE Appointments SET patient_id = ?, doctor_id = ?, appointment_date = ?, status = ? WHERE appointment_id = ?',
    [patient_id, doctor_id, appointment_date, status, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Appointment updated' });
    }
  );
});

// Delete Appointment
router.delete('/appointments/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Appointments WHERE appointment_id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Appointment deleted' });
  });
});

//
// Department 
//

// Add Department
router.post('/departments', (req, res) => {
  const { department_name, floor } = req.body;
  db.query(
    'INSERT INTO Departments (department_name, floor) VALUES (?, ?)',
    [department_name, floor],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Department added', id: result.insertId });
    }
  );
});

// Get Departments
router.get('/departments', (req, res) => {
  db.query('SELECT * FROM Departments', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Update Department
router.put('/departments/:id', (req, res) => {
  const id = req.params.id;
  const { department_name, floor } = req.body;
  db.query(
    'UPDATE Departments SET department_name = ?, floor = ? WHERE department_id = ?',
    [department_name, floor, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Department updated' });
    }
  );
});

// Delete Department
router.delete('/departments/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Departments WHERE department_id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Department deleted' });
  });
});


module.exports = router;
