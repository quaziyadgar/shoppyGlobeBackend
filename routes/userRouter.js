// Routes
app.get('/', (req, res) => res.send('ShoppyGlobe Backend'));
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/auth', authRouter);