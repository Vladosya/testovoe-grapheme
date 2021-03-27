<template>
  <form @submit.prevent="onSubmitDelivery">
    <div class="delivery">
      <div class="delivery__block">
        <div class="delivery__link">
          <router-link to="/" class="delivery__link-one">Доставка</router-link>
          <img
              src="../img/arrow.png"
              alt="arrow"
              class="delivery__link-img"
          />
          <router-link :to="isValid ? '/payment' : '/'" class="delivery__link-two">Оплата</router-link>
        </div>
        <div class="delivery__header">Информация для доставки</div>
        <div>
          <div class="delivery__input-label-one">Получатель</div>
          <label>
            <input type="text"
                   id="name"
                   v-model="name"
                   :class="{'invalid': $v.name.$error}"
                   @blur="$v.name.$touch()"
                   class="delivery__input-one"
                   placeholder="ФИО"/>
          </label>
        </div>
        <div>
          <div class="delivery__input-label-two">Адрес</div>
          <label>
            <input
                type="text"
                id="city"
                v-model="city"
                class="delivery__input-two"
                :class="{'invalid': $v.city.$error}"
                @blur="$v.city.$touch()"
                placeholder="Город"/>
          </label>
        </div>
        <div>
          <label>
            <input
                type="text"
                id="address"
                v-model="address"
                class="delivery__input-three"
                placeholder="Адрес"
                :class="{'invalid': $v.address.$error}"
                @blur="$v.address.$touch()"
            />
          </label>
        </div>
        <div class="delivery__input-small">
          <div>
            <label for="country"></label><select
              name="country"
              id="country"
              v-model="$v.country.$model"
              class="delivery__input-four"
              :class="{'invalid': $v.country.$error}"
              @blur="$v.country.$touch()"
          >
            <option disabled value>Страна</option>
            <option value="Россия">Россия</option>
            <option value="Сша">Сша</option>
            <option value="Китай">Китай</option>
            <option value="Япония">Япония</option>
            <option value="Англия">Англия</option>
          </select>
          </div>
          <div>
            <label>
              <input
                  type="number"
                  id="idx"
                  v-model="idx"
                  :class="{'invalid': $v.idx.$error}"
                  @blur="$v.idx.$touch()"
                  class="delivery__input-five"
                  placeholder="Индекс"
              />
            </label>
          </div>
        </div>

        <button class="delivery__btn" type="submit" :disabled="$v.$invalid">Продолжить</button>
      </div>
    </div>
  </form>
</template>

<script>
import {maxLength, minLength, required} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      city: '',
      address: '',
      country: '',
      idx: '',
      isValid: false
    }
  },
  validations: {
    name: {
      required
    },
    city: {
      required
    },
    address: {
      required
    },
    country: {
      required
    },
    idx: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(6)
    }
  },
  methods: {
    onSubmitDelivery() {
      console.log('this.name', this.name)
      console.log('this.city', this.city)
      console.log('this.address', this.address)
      console.log('this.country', this.country)
      console.log('this.idx', this.idx)
      this.goPushToPayment()

    },
    goPushToPayment() {
      this.isValid = true
      if (this.isValid) {
        this.$router.push('/payment')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.delivery {
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
    color: #101d94;
    text-decoration: none;
  }

  &__link-img {
    margin-left: 15px;
  }

  &__link-two {
    margin-left: 15.9px;
    font-size: 12px;
    line-height: 14px;
    color: #979797;
    text-decoration: none;
  }

  &__header {
    margin-top: 30.24px;
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
    margin-top: 6px;
    width: 320px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 15px;
  }

  &__input-label-two {
    margin-top: 30px;
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

  &__input-three {
    margin-top: 10px;
    width: 320px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 15px;
  }

  &__input-small {
    margin-top: 10px;
    display: flex;
  }

  &__input-four {
    width: 180px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 5px;
    color: #6B6B6B;
    padding-left: 15px;
  }

  &__input-five {
    width: 120px;
    height: 40px;
    margin-left: 20px;
    background: #ffffff;
    border: 1px solid #dedcdc;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 15px;
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
