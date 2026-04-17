// Cambia el mensaje de bienvenida para que se vea profesional
app.get('/', (req, res) => {
  res.json({
    status: "Operacional",
    system: "MANTRA Core Engine",
    client: "Hugo Isac - Management System",
    version: "2.0.4"
  });
});
