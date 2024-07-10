from flask import Flask
from configuration import configure_all

# Comando de Inicialização
app = Flask(__name__)

# Configuration
configure_all(app)
    
# Comando de Execução
app.run(debug=True)