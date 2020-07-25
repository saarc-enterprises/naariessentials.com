const quantity = document.querySelector<HTMLSelectElement>("#quantity");
if (quantity)
  quantity.addEventListener("change", () => {
    const price = document.querySelector(".price");
    if (price)
      price.innerHTML = `<del>₹${99 * 2 * parseInt(quantity.value)}</del> ₹${
        99 * parseInt(quantity.value)
      }/month`;
  });
