const mercadopago = require('mercadopago');

const { ACCESS_TOKEN, INTEGRATOR_ID } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
  integrator_id: INTEGRATOR_ID
});

exports.detail = async (req, res) => {
  res.render('detail', req.query);
}

exports.pay = async (req, res) => {

  const api = process.env.API;

  const params = req.body;

  const preference = {
    items: [
      {
        id: "1234",
        title: params.title,
        quantity: +params.unit,
        currency_id: 'COP',
        unit_price: +params.price,
        description: "Dispositivo móvil de Tienda e-commerce"
      }
    ],
    external_reference: 'pablou2015@hotmail.com',
    payer: {
      name: "Lalo",
      surname: "Landa",
      phone: {
        area_code: "52",
        number: 5549737300
      },
      email: "test_user_83958037@testuser.com",
      address: {
        zip_code: "03940",
        street_name: "Insurgentes Sur",
        street_number: 1602
      }
    },
    payment_methods: {
      excluded_payment_methods: [{ id: 'amex' }],
      excluded_payment_types: [{ id: 'atm' }],
      installments: 6,
      default_installments: 6
    },
    notification_url: `${api}hook`,
    auto_return: 'approved',
    back_urls: {
      success: `${api}success`,
      failure: `${api}failure`,
      pending: `${api}success`,
    },
  };

  const mp = await mercadopago.preferences.create(preference);

  return res.json({ data: mp.body.init_point });

}