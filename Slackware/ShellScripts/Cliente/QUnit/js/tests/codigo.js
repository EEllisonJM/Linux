/*
QUnit.test( name, callback )
name (string)		=>	Title of unit being tested
callback (function)	=>	Function to close over assertions

strictEqual( actual, expected, [ message ] )
actual			=>	Expression being tested
expected		=>	Known comparison value
message (string)	=>	A short description of the assertion

*/

QUnit.test("Tests de sumatoria_hasta_el", function(assert) {
     // 1
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(0), //actual
         0,//Result expected
         "Sumando hasta el 0: 0 + 0" //Message
     );
     // 2
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(2),
         3,
         "Sumando hasta el 2: 0 + 1 + 2"
     );
     // 3
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(6),
         21,
         "Sumando hasta el 6: 0 + 1 + 2 + 3 + 4 + 5 + 6"
     );
     // 4
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(-4),
         0,
         "Dado un número negativo"
     );
     // 5
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(10.3),
         0,
         "Dado un número flotante"
     );
     // 6
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(true),
         0,
         "Dado un booleano"
     );
     // 7
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(""),
         0,
         "Dada una cadena de caracteres"
     );
     // 8
     assert.strictEqual(
         Codigo.sumatoria_hasta_el({}),
         0,
         "Dado un objeto"
     );
     // 9
     assert.strictEqual(
         Codigo.sumatoria_hasta_el([]),
         0,
         "Dado un arreglo"
     );
     // 10
     assert.strictEqual(
         Codigo.sumatoria_hasta_el(),
         0,
         "Sin parámetro"
     );
 });
