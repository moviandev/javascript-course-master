const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`);
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  // PRODUCTS OVERVIEW

  if (pathName === '/products' || pathName === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(
      `${__dirname}/templates/overview.template.html`,
      'utf-8',
      (err, data) => {
        let overviewOutput = data;

        fs.readFile(
          `${__dirname}/templates/cards.templates.html`,
          'utf-8',
          (err, data) => {
            const cardsOutput = laptopData
              .map(el => replaceTemplate(data, el))
              .join('');

            overviewOutput = overviewOutput.replace(/{%CARDS%}/g, cardsOutput);

            res.end(overviewOutput);
          }
        );
      }
    );

    // LAPTOP DETAIL
  } else if (pathName === '/laptop' && id < laptopData.length) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile(
      `${__dirname}/templates/laptop.template.html`,
      'utf-8',
      (err, data) => {
        const laptop = laptopData[id];
        const output = replaceTemplate(data, laptop);
        res.end(output);
      }
    );
  } else if (/\.(jpg|jpeg|png|gif)/.test(pathName)) {
    fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.end(data);
    });
  } else {
    // URL NOT FOUND
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('PAGE NOT FOUND, TRY AGAIN');
  }

  console.log(pathName);
});

const port = 3337;
server.listen(port, '127.0.0.1', () => {
  console.log('Server start to listen');
});

function replaceTemplate(originalHtml, laptop) {
  let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
  output = output.replace(/{%IMG%}/g, laptop.image);
  output = output.replace(/{%CPU%}/g, laptop.cpu);
  output = output.replace(/{%RAM%}/g, laptop.ram);
  output = output.replace(/{%STORAGE%}/g, laptop.storage);
  output = output.replace(/{%SCREEN%}/g, laptop.screen);
  output = output.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
  output = output.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%ID%}/g, laptop.id);
  return output;
}
