<template>
  <form @submit.prevent="onSubmitPayment">
    <div class="payment">
      <div class="payment__block">
        <div class="payment__link">
          <router-link to="/" class="payment__link-one">Доставка</router-link>
          <img
              src="../img/arrow.png"
              alt="arrow"
              class="payment__link-img"
          />
          <router-link to="/payment" class="payment__link-two">Оплата</router-link>
        </div>
        <div class="payment__header">Оплата</div>
        <div>
          <div class="payment__input-label-one">Имя на карте</div>
          <label>
            <input
                type="text"
                id="cardName"
                v-model="cardName"
                class="payment__input-one"
                :class="{'invalid': $v.cardName.$error}"
                @blur="$v.cardName.$touch()"
                placeholder="Konstantin Ivanov"
            />
          </label>
        </div>
        <div>
          <div class="payment__input-label-two">Номер карты</div>
          <label>
            <input
                type="number"
                id="cardNumber"
                v-model="cardNumber"
                class="payment__input-two"
                :class="{'invalid': $v.cardNumber.$error}"
                @blur="$v.cardNumber.$touch()"
                placeholder="XXXX XXXX XXXX XXXX XXXX"
            />
          </label>
        </div>
        <div class="payment__input-small">
          <div>
            <div class="payment__input-label-three">Срок</div>
            <label>
              <input
                  type="number"
                  id="monthYear"
                  v-model="monthYear"
                  :class="{'invalid': $v.monthYear.$error}"
                  @blur="$v.monthYear.$touch()"
                  class="payment__input-three"
                  placeholder="MM / YY"

              />
            </label>
          </div>
          <div>
            <div class="payment__input-label-four">CVV</div>
            <label>
              <input
                  type="number"
                  class="payment__input-four"
                  id="cvv"
                  v-model="cvv"
                  :class="{'invalid': $v.cvv.$error}"
                  @blur="$v.cvv.$touch()"
              />
            </label>
          </div>
        </div>

        <button class="payment__btn" type="submit" :disabled="$v.$invalid">Продолжить</button>
      </div>
    </div>
  </form>
</template>

<script>
import {maxLength, minLength, required} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      cardName: '',
      cardNumber: '',
      monthYear: '',
      cvv: '',
      isValid: false
    }
  },
  validations: {
    cardName: {
      required
    },
    cardNumber: {
      required,
      minLength: minLength(16),
      maxLength: maxLength(16)
    },
    monthYear: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(4)
    },
    cvv: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(3)
    }
  },
  methods: {
    onSubmitPayment() {
      console.log('cardName', this.cardName)
      console.log('cardNumber', this.cardNumber)
      console.log('monthYear', this.monthYear)
      console.log('cvv', this.cvv)
      this.isValid = true
      if (this.isValid) {
        this.$router.push('/finish')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.payment {
  margin: 40px 0 0 40px;
  width: 401px;
  height: 520px;
  background: #ffffff;
  box-shadow: 0 0 10px #ebf0ff;
  border-radius: 24px;

  &__block {
    margin-left: 40px;
  }

  &__link {
    padding-top: 20px;
  }

  &__link-one {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #979797;
    text-decoration: none;
  }

  &__link-img {
    margin-left: 15px;
  }

  &__link-two {
    margin-left: 15.9px;
    font-size: 12px;
    line-height: 14px;
    color: #101d94;
    text-decoration: none;
  }

  &__header {
    margin-top: 30.24px;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    color: #101d94;
  }

  &__input-label-one {
    margin-top: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #101d94;
  }

  &__input-one {
    width: 320px;
    height: 40px;
    margin-top: 6px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 15px;
  }

  &__input-label-two {
    margin-top: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #101d94;
  }

  &__input-two {
    margin-top: 6px;
    width: 320px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 15px;
  }

  &__input-small {
    display: flex;
  }

  &__input-label-three {
    margin-top: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #101d94;
  }

  &__input-three {
    margin-top: 6px;
    width: 95px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 17px;
  }

  &__input-label-four {
    margin-left: 30px;
    margin-top: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #101d94;
  }

  &__input-four {
    margin: 6px 0 0 30px;
    width: 95px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 4px;
  }

  &__btn {
    margin-top: 30px;
    width: 180px;
    height: 45px;
    background: rgba(25, 165, 39, 0.8);
    border-radius: 5px;
    border: none;
    color: #ffffff;
  }
}

.invalid {
  border: 1px solid #FFADAD;
}
</style>
