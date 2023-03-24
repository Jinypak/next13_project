import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "상품 이름을 입력해주세요."],
  },
  description: {
    type: String,
    required: [true, "상품 설명을 입력해주세요."],
  },
  price: {
    type: Number,
    required: [true, "상품 가격을 입력해주세요."],
  },
  image: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "상품 카테고리를 입력해주세요."],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
      ],
      message: "상품 카테고리는 {VALUE} 중 하나여야 합니다.",
    },
  },
  seller: {
    type: String,
    required: [true, "상품 판매자를 입력해주세요."],
  },
  stock: {
    type: Number,
    required: [true, "상품 재고를 입력해주세요."],
  },
  numOfReviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
