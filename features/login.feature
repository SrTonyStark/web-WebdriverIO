Feature: Idealista

  Scenario: Usuario accede al home e inicia sesión

    Given Estar en la homepage
    And Se accede al area de usuarios
    When Se introduce usuario y contraseña 
    Then Se accede a la cuenta

  