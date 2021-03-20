import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shape' })
export class ShapePipe implements PipeTransform {
  transform(obj: { tall; weight }, tallUnit: string, weightUnit: string): string {
    // const exp = parseFloat(exponent);
    if (obj.tall !== undefined && obj.weight !== undefined) {
      let tall = obj.tall;
      let weight = obj.weight;
      if (tallUnit === 'cm') {
        tall /= 100;
      }
      if (weightUnit === 'jin') {
        weight /= 2;
      }
      const BMI = weight / (tall * tall);
      let result = '经计算,您的BMI为' + BMI.toFixed(2) + ',属于';
      if (BMI <= 18.4) {
        return (result += '偏瘦');
      } else if (BMI <= 23.9) {
        return (result += '正常');
      } else if (BMI <= 27.9) {
        return (result += '过重');
      } else if (BMI > 27.9) {
        return (result += '肥胖');
      }
    } else {
      return '请完善身高体重信息!';
    }
  }
}
